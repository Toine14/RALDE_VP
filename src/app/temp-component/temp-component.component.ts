import { Component, Input, OnInit } from '@angular/core';
import { BasicPracticalComponentService } from 'src/app/services/basic-practical-component.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';



@Component({
  selector: 'app-temp-component',
  templateUrl: './temp-component.component.html',
  styleUrls: ['./temp-component.component.scss'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(500, style({opacity: 1}))
      ]) 
    ])
  ]
})
export class TempComponentComponent implements OnInit {
  @Input() data: any;

  show_next: boolean = false;
 
  show_tips: boolean = false;
  answer_text_false: string = '';
  tipTitle: string = '';
  tipText: string = '';
  markerCount!:number;
  clickedItem:number[]=[]

  constructor() { }

  ngOnInit(): void {
    this.data = this.temp_data
    this.markerCount = this.data.markers.length
    console.log(this.markerCount)
  }


  temp_data: any = {
    "id": 1,
    "img_url": "assets/img/labor.jpg",
    "marker_url": "assets/img/point.png",
    "markers": [
      {
        "title": "entrance",
        "text": "A",
        "x_pos": 30,
        "y_pos": 75,
        "card_info": {
            "title": "Labcoat",
            "text_p1": "A white coat, also known as a laboratory coat or lab coat, is a knee-length overcoat or smock worn by professionals in the medical field or by those involved in laboratory work. The coat protects their street clothes and also serves as a simple uniform. The garment is made from white or light-colored cotton, linen, or cotton polyester blend, allowing it to be washed at high temperature and making it easy to see if it is clean."
        }
    },
    {
        "title": "water bath",
        "text": "B",
        "x_pos": 45,
        "y_pos": 65,
        "card_info": {
            "title": "Water-bath",
            "text_p1": "Warm water is the ideal medium for all kinds of contaminants. In order to bring the media and other components to the ideal temperature for your cells, you will typically place the non-sterile vessels into a water bath. You will have to ensure that the caps of the vessels are not in contact with the water at any time. Bacteria and other contaminants might remain here and subsequently contaminate the inside of the vessel once it is opened. Just like the CO2 incubator, a water bath requires a regular disinfection routine. You must ensure that the water bath is emptied completely and disinfected prior to the addition of fresh water. Finally, the appropriate amounts of fungicide and bactericide should be added to the fresh water. A thermo block is a good alternative to the classic water bath - it is easier to clean and it works without water!"
        }
    },
    {
        "title": "inverted microscope",
        "text": "C",
        "x_pos": 48,
        "y_pos": 60,
        "card_info": {
            "title": "Inverted microscope",
            "text_p1": "The degree of confluence, as well as appearance and morphology of the cells, have to be checked regularly via microscopy. When placing your cell culture consumables under the microscope, you must ensure that you are not opening the dish, flask or plate accidentally. Keep the time under the microscope as short as possible in order to avoid any unnecessary cooling of the cells. To achieve this, you should prepare the working area prior to removing the cells from the CO2 incubator."
        }
    },
    {
        "title": "CO2 incubator",
        "text": "D",
        "x_pos": 57,
        "y_pos": 60,
        "card_info": {
            "title": "CO2 incubator",
            "text_p1": "The environmental conditions in a CO2 incubator are not only perfect for growing your cells, but they are also perfect for the growth of bacterial cells and fungi. Therefore, regular disinfection of the incubator is critical for the protection of your cells. The incubator should be easy to clean, which can be accomplished by a racking system which is easy to disassemble. The water in the incubator needs to be changed regularly. Make sure that you empty the water tray completely and disinfect it before you fill it with fresh sterile water. An automatic disinfection mode can help maintain sterility, especially if the chamber is not free of seams and welds."
        }
    },
    {
        "title": "alcohol bottle",
        "text": "E",
        "x_pos": 61,
        "y_pos": 70,
        "card_info": {
            "title": "Desinfectant",
            "text_p1": "Remember to ..."
        }
    },
    {
        "title": "flow cabinet",
        "text": "F",
        "x_pos": 68,
        "y_pos": 65,
        "card_info": {
            "title": "Bio safety cabinet incubator",
            "text_p1": "The principles of working in a cell culture lab become even more relevant when working in a biosafety cabinet. In general, the cabinet should be as empty as possible. Do not place or store any items in the cabinet that are not necessary for your current working procedure and do not overload it with too many dishes, plates, flasks, etc. at one time. Before starting your work you should empty the entire work area and disinfect it. Do not simply spray your disinfection solution on everything, but instead wipe the solution across the entire surface of the cabinet. Then apply the same procedure to every item that you will place into the cabinet. A working direction from 'clean' to 'dirty' should be established at this time: if you are right-handed, you might start at the left side with placing your dishes, flasks or plates and all clean, new materials such as pipette tips. In the center is your working area where you will open your consumables and change the media. The right end of the cabinet will be your designated waste area with a container for used tips, etc."
        }
    },
    {
        "title": "centrifuge",
        "text": "G",
        "x_pos": 72,
        "y_pos": 65,
        "isCorrect": false,
        "answer_text": "",
        "card_info": {
            "title": "Centrifuge",
            "text_p1": "Keep the lid closed. Clean rotor and chamber regularly"
        }
    }
    ],
    "img_size": "",
    "text_p1": "Click on the marker to explore the diffrent items of a cell culture laboratory",
    "text_p2": "(click on every single marker to continue)",
    "followingCompId": 2,
    "previousCompId": 0
}

  onSpotClick(event: any) {
    var target = event.target || event.srcElement || event.currentTarget;
    var id = target.id;

    var index: number = +id;
    //const markerElement = <HTMLElement>document.getElementById(id);

    console.log(target);

    if(!this.clickedItem.includes(index)){
      this.clickedItem.push(index)
    }
    

    this.tipTitle = this.data.markers[index].card_info.title
    this.tipText = this.data.markers[index].card_info.text_p1
    this.show_tips = true;

  }

  onTipCloseClick(){
    this.show_tips=false;
    this.checkIfEveryItemClicked()
  }

  checkIfEveryItemClicked(){
    if(this.clickedItem.length==this.markerCount){
      this.show_next=true;

    }
  }






}
