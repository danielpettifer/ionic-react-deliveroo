import React from 'react';
import { IonHeader, IonContent, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon } from '@ionic/react';

type FilterModalProps = {
  closeAction: Function;
}

class FilterModal extends React.Component<FilterModalProps> {

  render() {
    return <>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Filter</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => this.props.closeAction()}>
              <IonIcon name="close" slot="icon-only"></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      </IonContent>
      {/* <IonFooter>
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton onClick={() => this.props.closeAction()}>Cancel</IonButton>
            <IonButton onClick={() => this.props.closeAction()} color="primary" fill="solid">Add selected</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonFooter> */}
    </>
  };

}

export default ({ closeAction }: { closeAction: Function }) => (
  <FilterModal closeAction={closeAction}>
  </FilterModal>
)
