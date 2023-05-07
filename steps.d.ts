/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type PageInteraction = import('./helpers/page-interaction_helpers.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends Playwright, PageInteraction {}
  interface I extends ReturnType<steps_file>, WithTranslation<PageInteraction> {}
  namespace Translation {
    interface Actions {}
  }
}
