import React from "react";
import { Divider } from "@material-ui/core";
import PropTypes from "prop-types";
import IvrTable from "./IvrTable";
import IvrProjects from "./IvrProjects";

export default function IvrList({ ivrs }) {
  const { ivr_projects, efp, rsa } = ivrs;

  return (
    <>
      <h6>RSA</h6>
      {rsa.length > 0 && (
        <IvrTable
          confirmNbrKey="rsa_trip_confirmnbr"
          statusKey="rsa_trip_status"
          trips={rsa}
        />
      )}
      <Divider />
      <h6>EFP</h6>
      {efp.length > 0 && (
        <IvrTable
          confirmNbrKey="efp_trip_confirmnbr"
          statusKey="efp_trip_status"
          trips={efp}
        />
      )}
      <Divider />
      {/* <h6>DAS</h6>
      {das.length > 0 && (
      <IvrTable
        confirmNbrKey="das_trip_confirmnbr"
        statusKey="das_trip_status"
        trips={das}
      />
    )} */}
      <Divider />
      <IvrProjects projects={ivr_projects} />
    </>
  );
}

IvrList.propTypes = {
  ivrs: PropTypes.object.isRequired,
};
