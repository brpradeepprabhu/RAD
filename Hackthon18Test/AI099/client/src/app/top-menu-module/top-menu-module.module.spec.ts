import { TopMenuModuleModule } from './top-menu-module.module';

describe('TopMenuModuleModule', () => {
  let topMenuModuleModule: TopMenuModuleModule;

  beforeEach(() => {
    topMenuModuleModule = new TopMenuModuleModule();
  });

  it('should create an instance', () => {
    expect(topMenuModuleModule).toBeTruthy();
  });
});
