import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const proprietes = {
    duration: 4000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
   
}

function SlideShowMain() {
  return (
    <div >
            <Slide {...proprietes}>
                <div>
                    <div>
                        <img src="/images/slidesShow/img_1.png" alt="img1" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src="/images/slidesShow/img_2.png" alt="img2" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src="images/slidesShow/img_3.png" alt="img3" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src="images/slidesShow/img_4.png" alt="img4" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src="images/slidesShow/img_5.png" alt="img5" />
                    </div>
                </div>
            </Slide>
        </div>
  )
}

export default SlideShowMain