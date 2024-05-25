const CouponDetails = () => {
  const coupons = [
    {
      name: "AlinMhew",
      validFrom: "1st Feb 2023",
      validTill: "22nd Mar 2023",
      status: "Active",
      visibility: "Show it to All Doctors",
      discountType: "Show it to All Doctors",
      inventory: "200",
      MaxRedemption: "15",
      AppointmentType: "All",
    },
    {
      name: "Jackock",
      validFrom: "1st Feb 2023",
      validTill: "22nd Mar 2023",
      status: "Inactive",
      visibility: "Show it to All Doctors",
      discountType: "Show it to All Doctors",
      inventory: "200",
      MaxRedemption: "20",
      AppointmentType: "All",
    },
    {
      name: "Shayaan",
      validFrom: "1st Feb 2023",
      validTill: "22nd Mar 2023",
      status: "Inactive",
      visibility: "Show it to doctors with certain concern",
      discountType: "Show it to doctors with certain concern",
      inventory: "200",
      MaxRedemption: "10",
      AppointmentType: "Chat",
    },
    {
      name: "Alinthew",
      validFrom: "1st Feb 2023",
      validTill: "22nd Mar 2023",
      status: "Active",
      visibility: "Select Particular Docs",
      discountType: "Select Particular Docs",
      inventory: "200",
      MaxRedemption: "5",
      AppointmentType: "Video Call",
    },
    {
      name: "AlinMhew",
      validFrom: "1st Feb 2023",
      validTill: "22nd Mar 2023",
      status: "Active",
      visibility: "Show it to doctors with certain concern",
      discountType: "Show it to doctors with certain concern",
      inventory: "200",
      MaxRedemption: "25",
      AppointmentType: "Call",
    },
  ];
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full ">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <input type="checkbox" />
            </th>
            <th className="text-left px-3 py-3 text-sm font-medium text-gray-500 whitespace-nowrap">
              Coupon Name
            </th>
            <th className="text-left px-3 py-3 text-sm font-medium text-gray-500 whitespace-nowrap">
              Coupon Name
            </th>
            <th className="text-left px-3 py-3 text-sm font-medium text-gray-500 whitespace-nowrap">
              Coupon Name
            </th>
            <th className="text-left px-3 py-3 text-sm font-medium text-gray-500 whitespace-nowrap">
              Coupon Name
            </th>
            <th className="text-left px-3 py-3 text-sm font-medium text-gray-500 whitespace-nowrap">
              Coupon Name
            </th>
            <th className="text-left px-3 py-3 text-sm font-medium text-gray-500 whitespace-nowrap">
              Coupon Name
            </th>
            <th className="text-left px-3 py-3 text-sm font-medium text-gray-500 whitespace-nowrap">
              Coupon Name
            </th>
            <th className="text-left px-3 py-3 text-sm font-medium text-gray-500 whitespace-nowrap">
              Coupon Name
            </th>
            <th className="text-left px-3 py-3 text-sm font-medium text-gray-500 whitespace-nowrap">
              Coupon Name
            </th>
            <th className="text-left px-3 py-3 text-sm font-medium text-gray-500 whitespace-nowrap">
              Coupon Name
            </th>
            <th className="text-left px-3 py-3 text-sm font-medium text-gray-500 whitespace-nowrap">
              Coupon Name
            </th>
            <th className="text-left px-3 py-3 text-sm font-medium text-gray-500 whitespace-nowrap">
              Coupon Name
            </th>
            <th className="text-left px-3 py-3 text-sm font-medium text-gray-500 whitespace-nowrap">
              Coupon Name
            </th>
            <th className="text-left px-3 py-3 text-sm font-medium text-gray-500 whitespace-nowrap">
              Coupon Name
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default CouponDetails;
