const createPatientData = ({
    name,
    phone,
    address,
    status,
    in_date_at,
    out_date_at,
}) => {
    const date = new Date();
    const isoDate = date.toISOString().slice(0, -1);

    return {
        "name": name,
        "phone": phone,
        "address": address,
        "status": status,
        "in_date_at": in_date_at,
        "out_date_at": out_date_at,
        "timestamp": isoDate
      }
};

export {
    createPatientData
};
