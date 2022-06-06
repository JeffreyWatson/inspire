import { ClockController } from "./Controllers/ClockController.js";
import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TasksController } from "./Controllers/TasksController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { WeathersController } from "./Controllers/WeathersController.js";

class App {
  // valuesController = new ValuesController();
  clockController = new ClockController();
  imagesController = new ImagesController();
  quotesController = new QuotesController();
  weathersController = new WeathersController();
  tasksController = new TasksController();

}

window["app"] = new App();
