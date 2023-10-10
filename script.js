const urlParams = new URLSearchParams(window.location.search);
const paymentId = urlParams.get('payment_id');

if (paymentId) {
    const payId = document.getElementById('payId');
    payId.textContent = `Razorpay Payment id: ${paymentId}`;
} else {
    console.error('Payment id is missing from url params');
}
