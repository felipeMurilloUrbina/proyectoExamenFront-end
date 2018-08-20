import { ProyectoExamenPage } from './app.po';

describe('proyecto-examen App', function() {
  let page: ProyectoExamenPage;

  beforeEach(() => {
    page = new ProyectoExamenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
