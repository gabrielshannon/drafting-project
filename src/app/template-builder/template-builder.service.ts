import { Template } from './template.model';

export class TemplaterService {
  private templates: Template[] = [
    new Template(
      'Nike',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png',
      '© 2023 Nike, Inc. All Rights Reserved'
    ),
    new Template(
      'Adidas',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png',
      '© 2023 Adidas, All Rights Reserved'
    ),
  ];

  getTemplates() {
    return this.templates.slice();
  }

  getTemplate(index: number) {
    return this.templates[index];
  }
}
