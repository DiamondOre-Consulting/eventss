import { useEffect } from 'react';

function RefundPolicy() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div>
      <div className="bg-gray-100 p-12 max-w-7xl mx-auto pt-24">
        <h2 className="text-3xl font-bold text-center mb-6">Refund & Cancellation Policy</h2>
        <div className="space-y-6">
          <section>
            <h3 className="text-2xl font-semibold pb-6">Terms & Conditions</h3>
            <p>
              <strong>Eventours</strong> acts in the capacity of booking agent and has no control over the services provided by
              the end suppliers like airlines, hotels, transporters, etc. <strong>Eventours</strong> charges a service charge
              which is inbuilt in the cost given to you in lieu of providing its services for suggesting,
              planning, booking, etc. for the various services.
            </p>
             <br />
             <p>
             If the bookings are cancelled from the buyer’s side then the following cancellation policies will
             apply.
             </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold pb-2">Cancellation Policy</h3>
            <p>
              Cancellation charges would apply from the time of receiving either a confirmation or advance,
              whichever is earlier.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold pb-2">Option I - Cancellation Charges</h3>
            <p className="font-medium"><strong>Tickets including but not limited to air tickets, train tickets, bus tickets, sightseeing tickets, etc.:</strong></p>
            <p>Rs.500 per ticket per way. This is in addition to cancellation charges charged by the airlines, service providers, booking system, etc.</p>

            <p className="font-medium mt-4"><strong>Hotels & packages:</strong></p>
            <p><strong>10% of the total booking amount. This is in addition to cancellation charges charged by the hotels, booking system, etc.</strong></p>

            <p className="font-medium mt-4"><strong>Government taxes:</strong></p>
            <p>Under no circumstance will government taxes like GST, TCS on foreign travel, etc. be refunded.</p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold pb-2">Option II - Credit Shell</h3>
            <p>
              To avoid cancellation fees charged by <strong>Eventours</strong>, the refund (after supplier deductions) will be retained
              in a credit shell valid for 90 days from cancellation request. Buyer can change destination and gift
              this credit shell to friends & family.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold pb-2">Date & Destination Change Policy</h3>
            <p>
             <strong className=''>Eventours</strong> allows 1 free date/destination change after confirmation. Subsequent changes: 5% of total cost
              + supplier charges. All charges subject to 18% GST (as of 1 Jan '20).
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold pb-2">Jurisdiction</h3>
            <p>
              All disputes are subject to Gautam Budh Nagar jurisdiction.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default RefundPolicy;
