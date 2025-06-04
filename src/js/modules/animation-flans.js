import SequenceCanvas from "./sequence-canvas";

function animationFlans() {

    const exCanvas = document.querySelector('canvas#example');

    if (exCanvas) {
        function createPathImage(index) {
            return `../img/anim/frame_${index.toString().padStart(0, '0')}.webp`;
        }
        const arrayPathImages = [...new Array(237).fill('').map((_, i) => createPathImage(i + 3))];

        const canvas = new SequenceCanvas({
            canvas: {
                element: document.querySelector('canvas#example'),
                width: 1920,
                height: 1080,
            },
            fps: 25,
            images: {
                paths: arrayPathImages,
                options: {
                    size: {
                        width: 1920,
                        height: 1080,
                    },
                }
            }
        });
    }
}

export default animationFlans;