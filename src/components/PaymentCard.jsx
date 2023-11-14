import React, { useEffect } from 'react';

const WompiPaymentComponent = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');

    // Set the script source to the Wompi widget URL
    script.src = 'https://checkout.wompi.co/widget.js';

    // Set script attributes with your specific data
    script.setAttribute('data-render', 'button');
    script.setAttribute('data-public-key', 'pub_test_X0zDA9xoKdePzhd8a0x9HAez7HgGO2fH');
    script.setAttribute('data-currency', 'COP');
    script.setAttribute('data-amount-in-cents', '4950000');
    script.setAttribute('data-reference', '4XMPGKWWPKWQ');
    script.setAttribute('data-signature:integrity', '37c8407747e595535433ef8f6a811d853cd943046624a0ec04662b17bbf33bf5');

    // Append the script to the document body
    document.body.appendChild(script);

    // Remove the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <form>
      {/* The script will be dynamically loaded here */}
    </form>
  );
};

export default WompiPaymentComponent;



