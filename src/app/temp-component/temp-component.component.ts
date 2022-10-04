import { Component, Input, OnInit } from '@angular/core';
import { BasicPracticalComponentService } from '../services/basic-practical-component.service';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
//import { CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
//import * as pannellum from 'pannellum'








@Component({
  selector: 'app-temp-component',
  templateUrl: './temp-component.component.html',
  styleUrls: ['./temp-component.component.scss'],
})
export class TempComponentComponent implements OnInit {
  @Input() data: any

  form!: FormGroup;










  tempdata = {
    "id": 706,
    "h2": "Subculturing of cells",
    "text_p1": "Do you have a contamination? Match the contamination type with the right picture, if applicable",
    "nextCompId": 707,
    "previousCompId": 705,
    "possible_answers": [{
      "text": "No contamination",
      "id": 1,
    }, {
      "text": "Bacteria contamination",
      "id": 2,
    }, {
      "text": "Yeast contamination",
      "id": 3,
    },
    {
      "text": "Fungi contamination",
      "id": 4,
    },
    {
      "text": "No contamination but cells are dying",
      "id": 5,
    }
    ],

    "badAnswerText": "Bad answer, at least one picture is bad labelled",
    "goodAnswerText": "All pictures where matched with the correct label",
    "picture_box": [
      {
        "img_url": "https://imgs.ralde.eu/conta_1_temp.png",
        "expected_id": 3,

      },
      {
        "img_url": "https://imgs.ralde.eu/conta_2_temp.png",
        "expected_id": 2,

      },
      {
        "img_url": "https://imgs.ralde.eu/conta_3_temp.png",
        "expected_id": 1,

      },

    ]
  }


  constructor(private practicalService: BasicPracticalComponentService, fb: FormBuilder) {
    this.form = fb.group({
      selectedAnswers: new FormArray([])
    });
  }


  ngOnInit(): void {
    (window as any).pannellum.viewer('panorama', {
      "type": "equirectangular",
      "panorama": "../../assets/img/360_lab.jpg",
      //"panorama": "https://imgs.ralde.eu/360_lab.jpg",
      "autoLoad": false,
      //"hotSpotDebug": true,
      "hotSpots": [{
        "pitch": -9.4,
        "yaw": 222.6,
        "type": "info",
        "text": "glove box"
      },
      {
        "pitch": -15.74,
        "yaw": 90.76,
        "type": "info",
        "text": "centrifuge"
      },
      {
        "pitch": -12.30,
        "yaw": 52.07,
        "type": "info",
        "text": "water-bath"
      },
      {
        "pitch": -2.79,
        "yaw": 32.88,
        "type": "info",
        "text": "microscope"
      },
      {
        "pitch": 2.73,
        "yaw": -21.73,
        "type": "info",
        "text": "CO\u2082 incubator"
      },
      {
        "pitch": -11.21,
        "yaw": -69.24,
        "type": "info",
        "text": "Bio safety cabinet incubator"
      },

      ],
    });
  }




  onNextClick() {
    this.practicalService.set_component_id(this.data.nextCompId)
  }
  onPreviousClick() {
    this.practicalService.set_component_id(this.data.previousCompId)
  }

















}
