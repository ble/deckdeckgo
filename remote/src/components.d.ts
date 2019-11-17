/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppBottomSheet {}
  interface AppDraw {
    'height': number;
    'heightOffset': number;
    'moveDraw': (leftOffset: number, transitionDuration: string) => Promise<void>;
    'slides': number;
    'width': number;
    'widthOffset': number;
  }
  interface AppExperimentalSettings {}
  interface AppGeneralSettings {}
  interface AppHeader {}
  interface AppLogo {}
  interface AppMotion {}
  interface AppNotes {}
  interface AppRemote {
    'room': string;
  }
  interface AppRemoteConnect {}
  interface AppRemoteSlidePicker {}
  interface AppRoot {}
  interface AppSettings {}
  interface AppStopwatch {
    'length': number;
    'remaining': number;
  }
  interface AppStopwatchTime {}
  interface AppTimer {}
}

declare global {


  interface HTMLAppBottomSheetElement extends Components.AppBottomSheet, HTMLStencilElement {}
  var HTMLAppBottomSheetElement: {
    prototype: HTMLAppBottomSheetElement;
    new (): HTMLAppBottomSheetElement;
  };

  interface HTMLAppDrawElement extends Components.AppDraw, HTMLStencilElement {}
  var HTMLAppDrawElement: {
    prototype: HTMLAppDrawElement;
    new (): HTMLAppDrawElement;
  };

  interface HTMLAppExperimentalSettingsElement extends Components.AppExperimentalSettings, HTMLStencilElement {}
  var HTMLAppExperimentalSettingsElement: {
    prototype: HTMLAppExperimentalSettingsElement;
    new (): HTMLAppExperimentalSettingsElement;
  };

  interface HTMLAppGeneralSettingsElement extends Components.AppGeneralSettings, HTMLStencilElement {}
  var HTMLAppGeneralSettingsElement: {
    prototype: HTMLAppGeneralSettingsElement;
    new (): HTMLAppGeneralSettingsElement;
  };

  interface HTMLAppHeaderElement extends Components.AppHeader, HTMLStencilElement {}
  var HTMLAppHeaderElement: {
    prototype: HTMLAppHeaderElement;
    new (): HTMLAppHeaderElement;
  };

  interface HTMLAppLogoElement extends Components.AppLogo, HTMLStencilElement {}
  var HTMLAppLogoElement: {
    prototype: HTMLAppLogoElement;
    new (): HTMLAppLogoElement;
  };

  interface HTMLAppMotionElement extends Components.AppMotion, HTMLStencilElement {}
  var HTMLAppMotionElement: {
    prototype: HTMLAppMotionElement;
    new (): HTMLAppMotionElement;
  };

  interface HTMLAppNotesElement extends Components.AppNotes, HTMLStencilElement {}
  var HTMLAppNotesElement: {
    prototype: HTMLAppNotesElement;
    new (): HTMLAppNotesElement;
  };

  interface HTMLAppRemoteElement extends Components.AppRemote, HTMLStencilElement {}
  var HTMLAppRemoteElement: {
    prototype: HTMLAppRemoteElement;
    new (): HTMLAppRemoteElement;
  };

  interface HTMLAppRemoteConnectElement extends Components.AppRemoteConnect, HTMLStencilElement {}
  var HTMLAppRemoteConnectElement: {
    prototype: HTMLAppRemoteConnectElement;
    new (): HTMLAppRemoteConnectElement;
  };

  interface HTMLAppRemoteSlidePickerElement extends Components.AppRemoteSlidePicker, HTMLStencilElement {}
  var HTMLAppRemoteSlidePickerElement: {
    prototype: HTMLAppRemoteSlidePickerElement;
    new (): HTMLAppRemoteSlidePickerElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppSettingsElement extends Components.AppSettings, HTMLStencilElement {}
  var HTMLAppSettingsElement: {
    prototype: HTMLAppSettingsElement;
    new (): HTMLAppSettingsElement;
  };

  interface HTMLAppStopwatchElement extends Components.AppStopwatch, HTMLStencilElement {}
  var HTMLAppStopwatchElement: {
    prototype: HTMLAppStopwatchElement;
    new (): HTMLAppStopwatchElement;
  };

  interface HTMLAppStopwatchTimeElement extends Components.AppStopwatchTime, HTMLStencilElement {}
  var HTMLAppStopwatchTimeElement: {
    prototype: HTMLAppStopwatchTimeElement;
    new (): HTMLAppStopwatchTimeElement;
  };

  interface HTMLAppTimerElement extends Components.AppTimer, HTMLStencilElement {}
  var HTMLAppTimerElement: {
    prototype: HTMLAppTimerElement;
    new (): HTMLAppTimerElement;
  };
  interface HTMLElementTagNameMap {
    'app-bottom-sheet': HTMLAppBottomSheetElement;
    'app-draw': HTMLAppDrawElement;
    'app-experimental-settings': HTMLAppExperimentalSettingsElement;
    'app-general-settings': HTMLAppGeneralSettingsElement;
    'app-header': HTMLAppHeaderElement;
    'app-logo': HTMLAppLogoElement;
    'app-motion': HTMLAppMotionElement;
    'app-notes': HTMLAppNotesElement;
    'app-remote': HTMLAppRemoteElement;
    'app-remote-connect': HTMLAppRemoteConnectElement;
    'app-remote-slide-picker': HTMLAppRemoteSlidePickerElement;
    'app-root': HTMLAppRootElement;
    'app-settings': HTMLAppSettingsElement;
    'app-stopwatch': HTMLAppStopwatchElement;
    'app-stopwatch-time': HTMLAppStopwatchTimeElement;
    'app-timer': HTMLAppTimerElement;
  }
}

declare namespace LocalJSX {
  interface AppBottomSheet {}
  interface AppDraw {
    'height'?: number;
    'heightOffset'?: number;
    'onDrawing'?: (event: CustomEvent<boolean>) => void;
    'slides'?: number;
    'width'?: number;
    'widthOffset'?: number;
  }
  interface AppExperimentalSettings {}
  interface AppGeneralSettings {}
  interface AppHeader {}
  interface AppLogo {}
  interface AppMotion {}
  interface AppNotes {}
  interface AppRemote {
    'room'?: string;
  }
  interface AppRemoteConnect {}
  interface AppRemoteSlidePicker {}
  interface AppRoot {}
  interface AppSettings {}
  interface AppStopwatch {
    'length'?: number;
    'remaining'?: number;
  }
  interface AppStopwatchTime {}
  interface AppTimer {}

  interface IntrinsicElements {
    'app-bottom-sheet': AppBottomSheet;
    'app-draw': AppDraw;
    'app-experimental-settings': AppExperimentalSettings;
    'app-general-settings': AppGeneralSettings;
    'app-header': AppHeader;
    'app-logo': AppLogo;
    'app-motion': AppMotion;
    'app-notes': AppNotes;
    'app-remote': AppRemote;
    'app-remote-connect': AppRemoteConnect;
    'app-remote-slide-picker': AppRemoteSlidePicker;
    'app-root': AppRoot;
    'app-settings': AppSettings;
    'app-stopwatch': AppStopwatch;
    'app-stopwatch-time': AppStopwatchTime;
    'app-timer': AppTimer;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-bottom-sheet': LocalJSX.AppBottomSheet & JSXBase.HTMLAttributes<HTMLAppBottomSheetElement>;
      'app-draw': LocalJSX.AppDraw & JSXBase.HTMLAttributes<HTMLAppDrawElement>;
      'app-experimental-settings': LocalJSX.AppExperimentalSettings & JSXBase.HTMLAttributes<HTMLAppExperimentalSettingsElement>;
      'app-general-settings': LocalJSX.AppGeneralSettings & JSXBase.HTMLAttributes<HTMLAppGeneralSettingsElement>;
      'app-header': LocalJSX.AppHeader & JSXBase.HTMLAttributes<HTMLAppHeaderElement>;
      'app-logo': LocalJSX.AppLogo & JSXBase.HTMLAttributes<HTMLAppLogoElement>;
      'app-motion': LocalJSX.AppMotion & JSXBase.HTMLAttributes<HTMLAppMotionElement>;
      'app-notes': LocalJSX.AppNotes & JSXBase.HTMLAttributes<HTMLAppNotesElement>;
      'app-remote': LocalJSX.AppRemote & JSXBase.HTMLAttributes<HTMLAppRemoteElement>;
      'app-remote-connect': LocalJSX.AppRemoteConnect & JSXBase.HTMLAttributes<HTMLAppRemoteConnectElement>;
      'app-remote-slide-picker': LocalJSX.AppRemoteSlidePicker & JSXBase.HTMLAttributes<HTMLAppRemoteSlidePickerElement>;
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'app-settings': LocalJSX.AppSettings & JSXBase.HTMLAttributes<HTMLAppSettingsElement>;
      'app-stopwatch': LocalJSX.AppStopwatch & JSXBase.HTMLAttributes<HTMLAppStopwatchElement>;
      'app-stopwatch-time': LocalJSX.AppStopwatchTime & JSXBase.HTMLAttributes<HTMLAppStopwatchTimeElement>;
      'app-timer': LocalJSX.AppTimer & JSXBase.HTMLAttributes<HTMLAppTimerElement>;
    }
  }
}


