import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { BasicPracticalComponentService } from 'src/app/services/basic-practical-component.service';

@Component({
  selector: 'app-image-multichoice-notext',
  templateUrl: './image-multichoice-notext.component.html',
  styleUrls: ['./image-multichoice-notext.component.scss']
})
export class ImageMultichoiceNotextComponent implements OnInit {

  @Input() data: any
  form!: FormGroup;

  answered: boolean = false;
  goodAnswer: boolean = false;
  orderChecked: boolean = false;
  goodAnswerCount: number = 0;
  isAnswerPictureIllustration: boolean = false;
  isMoreThanOnePictureAnswer: boolean = false;
  size1 = '20em';
  size2 = '20em';


  constructor(fb: FormBuilder, private practicalService: BasicPracticalComponentService) {
    this.form = fb.group({
      selectedAnswers: new FormArray([])
    });
  }

  ngOnInit(): void {    
    this.goodAnswerCount = this.howManyGoodAnswers(this.data.answers)
    console.log(this.goodAnswerCount)
    if (this.data.isAnswerPictureIllustration) {
      if (this.data.answerIllustrationPicturesUrls.length > 1) {
        this.isMoreThanOnePictureAnswer = true
      }
    }
  }


  howManyGoodAnswers(answers: any[]) {
    return answers.filter(x => x.isCorrect).length

  }

  onNextClick() {
    this.practicalService.set_component_id(this.data.nextCompId)
  }
  onPreviousClick() {
    this.practicalService.set_component_id(this.data.previousCompId)
  }

  onCheckboxChange(event: any) {
    const selectedAnswers = (this.form.controls['selectedAnswers'] as FormArray);
    let event_id = event.target.id.split('_')[1]
    let id_to_border = 'imageToSelect_'+event_id
    let sibling_img = document.getElementById(id_to_border)    
    if (event.target.checked) {
      selectedAnswers.push(new FormControl(event.target.value));
      if (sibling_img != null) {
        sibling_img.style.setProperty('border', '10px solid #3ae08d');
        //sibling_img.style.setProperty('border', '');
       
      }
    } else {

      if (sibling_img != null) {
        sibling_img.style.setProperty('border-style', 'none');
        //sibling_img.style.setProperty('border', '');
       
      }
      const index = selectedAnswers.controls.findIndex(x => x.value === event.target.value);
      selectedAnswers.removeAt(index);
    }
  }




  checkOrder() {
    this.answered = true;
    const selectedAnswers = this.form.value.selectedAnswers
    console.log(selectedAnswers)
    let countOfTrue = 0
    let totalTicked = 0
    for (let answer of selectedAnswers) {
      totalTicked++
      if (answer === 'true') {
        countOfTrue++
      }
    }
    if (this.goodAnswerCount == countOfTrue && totalTicked == countOfTrue) {
      this.goodAnswer = true;
      console.log("good")
    }
    else {
      console.log("bad");
      this.goodAnswer = false;
    }
  }

}
