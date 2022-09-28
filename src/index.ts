import { listenerExecutionOrder } from "./listenerExecutionOrder";
import { createMyFirstEvent } from "./createMyFirstEvent";
import {
  instanceEventEmitterWithSingleton,
  instanceEventEmitterWithoutSingleton
} from "./twoInstancesEventEmitter";
import { processExit } from "./processExit";

function factory() {
  createMyFirstEvent();
  instanceEventEmitterWithoutSingleton();
  instanceEventEmitterWithSingleton();
  listenerExecutionOrder();
  processExit();
}

factory();