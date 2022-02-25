import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[myCustomFor]',
})
export class MyCustomForDirective implements OnInit {
  private _condition: number[] = [];

  @Input() set myCustomForIn(condition: number[]) {
    this._condition = condition;
    console.log(this._condition);
  }

  get condition() {
    return this._condition;
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    console.log(this.templateRef.elementRef.nativeElement);
    console.log(this.viewContainerRef);
    for (const numero of this.condition) {
      /**
       * viewContainerRef representa um container apenas de referencia, como se fosse um ng-container
       * no código abaixo, eu digo para esse container embutir uma view (elemento html),
       * dentro dele, e no PRIMEIRO PARAMETRO eu passo qual template de referencia ele deve utilizar no caso
       * estou pedindo para que use o template de referencia que a diretiva está utilizando
       * que nesse caso é uma <li> -> <li *myCustomFor="let n; in: [1, 2, 3]">{{ n }}</li>
       * como SEGUNDO PARAMETRO eu passo qual contexto esse template de referencia deve usar,
       * atraves do objeto com a palavra reservada "$implicit" eu digo que eu quero que use o contexto implicito
       * ou seja lá no HTML eu passei uma variavel quando adicionei essa diretiva <li *myCustomFor="let n; in: [1, 2, 3]">{{ n }}</li>
       * esse let n, eu declarei n como variavel e estou usando o valor de n para inserir o dado dessa forma:
       * {{ n }} o $implicit pega esse n como referencia, e ai vc passa o valor que desejar depois, nesse caso
       * eu peguei o proprio valor que veio no input, ficando dessa forma:
       * { $implicit: numero }, dessa forma eu digo para que lá no html aonde inseri o {{ n }}, que ele
       * receba o valor contido na variavel numero, para ficar mais facil o entendimento ficaria dessa forma
       * { $implicit: 222 } o valor declarado e no html <li>{{ n }}</li> que resultaria em <li>222</li>
       *
       */
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        $implicit: numero,
      });
    }

    /**
     * this.viewContainerRef.detach(0); após o elemento ser criado podemos remover ele. na posição 0
     *  ou se n colocarmos nada ele vai remover o último adicionado.
     */
    setTimeout(() => {
      this.viewContainerRef.detach();
    }, 3000);
  }
}
