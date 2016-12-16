import { NgModule, ModuleWithProviders, OpaqueToken } from '@angular/core';

export const DefaultClient = new OpaqueToken('DefaultClient');

@NgModule()
export class ExampleModule {
  public static forRoot(client: any): ModuleWithProviders {
    return {
      ngModule: ExampleModule,
      providers: [
        {
          provide: DefaultClient,
          useValue: client,
        }
      ],
    };
  }
}
