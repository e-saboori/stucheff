import { Component, OnInit } from '@angular/core';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-nutrition-widget',
  templateUrl: './nutrition-widget.component.html',
  styleUrls: ['./nutrition-widget.component.scss']
})
export class NutritionWidgetComponent implements OnInit {

  constructor() { }
  private spoonacularApiKey: string= '871cc9ddc1ea4733830dd2c30e3d691a'; // REPLACE THIS DEMO KEY, get a free key here: https://spoonacular.com/food-api
  private  servings: number =2;
  private  ingredients: string = '1 apple\n2 cups of coffee\n1.4 liters almond milk\n2 1/2 salmon fillets\nkale';

  ngOnInit(): void {
  }

  public previewNutritionWidget() {
      var postContent = this.ingredients;

      console.log("here");
      let self = this;
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function () {
          if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
              self.previewWidgetCallback(xmlHttp.responseText);
          }
      }
      xmlHttp.open("POST", 'https://api.spoonacular.com/recipes/visualizeNutrition?apiKey=' + this.spoonacularApiKey, true);
      xmlHttp.send('defaultCss=true&servings=' + this.servings + '&ingredientList=' + postContent);
    }

    public previewWidgetCallback(response: string) {
    console.log(response);
      // var el = document.createElement("script");
      // el.setAttribute("type", "text/javascript");
      // el.setAttribute("src", "https://code.jquery.com/jquery-1.9.1.min.js");
      // //document.getElementById('previewWidget').contentDocument.head.appendChild(el);

      // el = document.createElement("script");
      // el.setAttribute("type", "text/javascript");
      // el.setAttribute("src", "https://spoonacular.com/application/frontend/js/jquery.canvasjs.min");
      // //this.previewWidget('previewWidget').contentDocument.head.appendChild(el);

      // // wait until jquery is loaded
      // // setTimeout(function () {
      // //     var iframeDocument = document.getElementById('previewWidget').contentDocument;
      // //     iframeDocument.open();
      // //     iframeDocument.write(response);
      // //     iframeDocument.close();

      //     var el = document.createElement("script");
      //     el.setAttribute("type", "text/javascript");
      //     el.setAttribute("src", "https://spoonacular.com/application/frontend/js/nutritionWidget.min.js?c=1");
      // //     document.getElementById('previewWidget').contentDocument.body.appendChild(el);
      // // }, 1000);
    }
  }