import logo_keras from '../../media/logo_keras.svg'
import logo_tensorflow from '../../media/logo_tensorflow.svg'

export const List = [
  {
    id: 1,
    name:'Image Colorization',
    image: logo_keras,
    description: "This project consists of a machine learning model which aims to add color to grayscale or black and white images uploaded by the user. We have used a 8 layered Convolutional Neural Network to train our model on the Random Name Dataset. Model was made using keras and tensorflow libraries.",
    link: '/projects/colorize',
  },
  {
    id: 2,
    name:'Low Light Image Enhancement',
    image: logo_tensorflow,
    description: "This project consists of a Deep learning model which aims to Enhance images captured in low-light envirnoment. We have used a CycleGAN and added a attention module to enhance it's capabilites. It is trained on a custom Dataset. Model was made using keras and tensorflow libraries.",
    link: '/projects/lowlight',
  },
  {
    id: 3,
    name:'Poem Generator',
    image: logo_keras,
    description: "This project generates a poem based on a phrase given by the user. We have used Embedding along with a LSTM Network. The model was trained on poems written by famous authors such as William Shakespeare, Edmund Spenser, John Donne, Sir Philip Sidney, etc.",
    link: '/projects/poem',
  },
];

export default List