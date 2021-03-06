import {Component, Element, State, h} from '@stencil/core';

import {isMobile} from '@deckdeckgo/utils';

import {MoreAction} from '../../../../utils/editor/more-action';

@Component({
  tag: 'app-more-deck-actions',
  styleUrl: 'app-more-deck-actions.scss'
})
export class AppMoreDeckActions {
  @Element() el: HTMLElement;

  @State()
  private mobile: boolean = false;

  componentWillLoad() {
    this.mobile = isMobile();
  }

  private async closePopover(action: MoreAction) {
    await (this.el.closest('ion-popover') as HTMLIonPopoverElement).dismiss({
      action: action
    });
  }

  private async closeSharePopover($event: CustomEvent<MoreAction>) {
    await this.closePopover($event ? $event.detail : null);
  }

  render() {
    return (
      <div class="ion-padding">
        <a onClick={() => this.closePopover(MoreAction.JUMP_TO)} aria-label="Jump to slide">
          <p>Slides</p>
        </a>
        <a onClick={() => this.closePopover(MoreAction.STYLE)} aria-label="Style">
          <p>Style</p>
        </a>
        {this.renderFullscreenOption()}
        <a onClick={() => this.closePopover(MoreAction.REMOTE)} aria-label="Remote control">
          <p>Remote control</p>
        </a>
        <app-share-options onSelectedOption={($event: CustomEvent<MoreAction>) => this.closeSharePopover($event)}></app-share-options>
      </div>
    );
  }

  private renderFullscreenOption() {
    if (!this.mobile) {
      return (
        <a onClick={() => this.closePopover(MoreAction.FULLSCREEN)}>
          <p>Fullscreen</p>
        </a>
      );
    } else {
      return undefined;
    }
  }
}
