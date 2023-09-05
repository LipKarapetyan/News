import React from "react";

function Share() {

    const share = () => {
        if (navigator.share) {
          navigator.share({
            title: 'My App',
            text: 'Check out this awesome app!',
            url: window.location.href
          })
          .then(() => console.log('Shared successfully'))
          .catch((error) => console.error('Error sharing:', error));
        }
      };
    return(
        <div>
          <img className="save1" src="share3.png" alt="" onClick={share} />
        </div>
    )
}

export default Share