import { CardModel } from './../models/cards.model';
import { Component, Renderer2, ViewChild } from '@angular/core';
import { AnimationController, Animation, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('blocks') blocks: any;
  @ViewChild('background') background: any;

  public options: Array<any> = [
    { icon: 'person-add-outline', text: 'Indicar amigos' },
    { icon: 'phone-portrait-outline', text: 'Recarga de celular' },
    { icon: 'wallet-outline', text: 'Depositar' },
    { icon: 'options-outline', text: 'Ajustar limite' },
    { icon: 'help-circle-outline', text: 'Me ajuda' },
    { icon: 'barcode-outline', text: 'Pagar' },
    { icon: 'lock-open-outline', text: 'Bloquear cartão' },
    { icon: 'card-outline', text: 'Cartão virtual' },
  ];

  public items: Array<any> = [
    { icon: 'help-circle-outline', text: 'Me ajuda' },
    { icon: 'person-outline', text: 'Perfil' },
    { icon: 'cash-outline', text: 'Configurar conta' },
    { icon: 'card-outline', text: 'Configurar cartão' },
    { icon: 'phone-portrait-outline', text: 'Configurações do app' },
  ];

  public cards: Array<CardModel> = [
    {
      title: 'Cartão de crédito',
      titleIcon: 'card-outline',
      rightIcon: '',
      titleContent: 'Fatura atual',
      value: 'R$325,50',
      limitText: 'Limite disponível:',
      limit: 'R$4502,50',
      footer: 'Compra mais recente em ifood *Ifood no valor de R$54,00',
      footerIcon: 'pizza-outline',
    },
    {
      title: 'Conta',
      titleIcon: 'cash-outline',
      rightIcon: 'eye-off-outline',
      titleContent: 'Saldo disponível',
      value: 'R$1530,45',
      limitText: '',
      limit: '',
      footer: 'Boleto de R$455,30 pago na segunda',
      footerIcon: 'barcode-outline',
    },
  ];

  public initialStep: number = 0;
  private maxTranslate: number;
  private animation!: Animation;

  public objectKeys = Object.keys;

  public slidesOptions: any = { slidesPerView: 3, freeMode: true };

  constructor(
    private animationCtrl: AnimationController,
    private platform: Platform,
    private renderer: Renderer2
  ) {
    this.maxTranslate = this.platform.height();
  }

  ngAfterViewInit() {
    this.createAnimation();
  }

  toggleBlocks() {
    this.initialStep = this.initialStep === 0 ? this.maxTranslate : 0;
    this.animation
      .direction(this.initialStep === 0 ? 'reverse' : 'normal')
      .play();
    this.setBackgroundOpacity();
  }

  createAnimation() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.blocks.nativeElement)
      .duration(300)
      .fromTo(
        'transform',
        'translateY(0)',
        `translateY(${this.maxTranslate}px)`
      );
  }

  setBackgroundOpacity(){
    this.renderer.setStyle(this.background.nativeElement, 'opacity', this.initialStep === 0 ? '0' : '1');
  }

  fixedBlocks(): boolean{
    return this.initialStep === this.maxTranslate;
  }
}
