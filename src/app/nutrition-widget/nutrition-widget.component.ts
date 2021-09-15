import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-nutrition-widget',
  templateUrl: './nutrition-widget.component.html',
  styleUrls: ['./nutrition-widget.component.scss']
})
export class NutritionWidgetComponent implements OnInit, AfterViewInit {
  @ViewChild('previewWidget') previewWidget?: ElementRef;
  constructor(private elementRef:ElementRef, 
    @Inject(DOCUMENT) private _document: Document) { }

  ngAfterViewInit(): void {  }
  ngOnInit(): void {  }

  private spoonacularApiKey: string= '871cc9ddc1ea4733830dd2c30e3d691a'; // REPLACE THIS DEMO KEY, get a free key here: https://spoonacular.com/food-api
  private  servings: number =2;
  private  ingredients: string = '1 apple\n2 cups of coffee\n1.4 liters almond milk\n2 1/2 salmon fillets\nkale';

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
      const hostElement = this.previewWidget?.nativeElement;
      const iframe = hostElement.contentDocument;
      
      const script = document.createElement('script');
      script.type ="text/javascript";
      script.src = "https://code.jquery.com/jquery-1.9.1.min.js";
      iframe.head.appendChild(script);

      const script1 = document.createElement('script');
      script1.type ="text/javascript";
      script1.src = "https://spoonacular.com/application/frontend/js/jquery.canvasjs.min";
      iframe.head.appendChild(script1);

      // wait until jquery is loaded
      setTimeout(function () {
          var iframeDocument =hostElement.contentDocument;
          iframeDocument.open();
          iframeDocument.write(response);
          iframeDocument.close();
 

      const script2 = document.createElement('script');
      script2.type ="text/javascript";
      script2.src ="https://spoonacular.com/application/frontend/js/nutritionWidget.min.js?c=1";
      iframe.head.appendChild(script2);
      });
      console.log(response);
    }
  }