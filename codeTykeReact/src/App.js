import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LearningModule from './components/LearningModule';
import './App.scss';
import Modal from './components/Modal';


function App() {

  const [modalDisplay, setModalDisplay] = useState(false);

  const showHideModal = () => {
    setModalDisplay(!modalDisplay);
  }


  //TODO: LearningModule should take props.id to kick off api call

  // if(learningModule.id){
    var learningModule = <LearningModule showHideModal={showHideModal} />
  // } else {
    // var pageLoader = <PageLoader />;
  // }

  return (
    <div>
      <Modal modalDisplay={modalDisplay} showHideModal={showHideModal} />
      <Navbar />
      <div id="mainWrapper">
        {learningModule}
      </div>
      <Footer />
    </div>
  );
}

export default App;
