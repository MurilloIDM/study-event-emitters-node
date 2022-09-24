import { createMyFirstEvent } from "./createMyFirstEvent";
import {
  instanceEventEmitterWithSingleton,
  instanceEventEmitterWithoutSingleton
} from "./twoInstancesEventEmitter";

function factory() {
  createMyFirstEvent();
  instanceEventEmitterWithoutSingleton();
  instanceEventEmitterWithSingleton();
}

factory();