import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';

// Consider using this interface for all CanDeactivate guards,
// and have your components implement this interface, too.
//
//   e.g. export class VillainsComponent implements CanComponentDeactivate { ...
//
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export const CanDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> = (
  component: CanComponentDeactivate
) => {
  console.log('DEACTIVATE cod is running');
  return component.canDeactivate();
};

/*
// Consider using this interface for all CanDeactivate guards,
// and have your components implement this interface, too.
//
//   e.g. export class VillainsComponent implements CanComponentDeactivate { ...
//
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export default class CanGuardDeactivateSrvc {
  constructor() {}
  //   canDeactivate: () => boolean | Observable<boolean> | Promise<boolean> =
  //   (
  //     // component: CanComponentDeactivate,
  //     // currentRoute: ActivatedRouteSnapshot,
  //     // currentState: RouterStateSnapshot,
  //     // nextState: RouterStateSnapshot
  //   )  => {
  //       return component.canDeactivate();
  //     };
  canDeactivate: CanDeactivateFn<CanComponentDeactivate> = (
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ) => {
    return component.canDeactivate();
  };
}

// export const CanGuardDeactivate: CanDeactivateFn<CanComponentDeactivate> = (
//   component: CanComponentDeactivate,
//   currentRoute: ActivatedRouteSnapshot,
//   currentState: RouterStateSnapshot,
//   nextState: RouterStateSnapshot
// ) => {
//   return component.canDeactivate();
// };
*/
