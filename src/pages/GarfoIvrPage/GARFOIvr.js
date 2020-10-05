import React, { useEffect } from "react";
import { connect } from "react-redux";
import TitleBar from "../../components/TitleBar";
import { Container } from "@material-ui/core";
import { ivrListRequest } from "../../actions/ivrActions";
import { mapIvrStateToProps } from "../../services/mapStateToProps";
import { ivrRequest } from "../../constants/default_request";
import Spinner from "../../components/common/Spinner";
import IvrList from "./IvrList";
// import IvrTable from "./IvrTable";

function IvrListPage({ ivrs, ivrListRequest, ...props }) {
  useEffect(() => {
    const { client_id, token, user_app_status } = props.auth;
    const payload = ivrRequest(client_id, token, user_app_status, 555555); // temporary hardcode vessel number
    ivrListRequest(payload);
    // eslint-disable-next-line
  }, [ivrListRequest]);

  return (
    <>
      <TitleBar title="GARFO IVR's" />
      {Object.keys(ivrs).length === 0 ? (
        <Spinner />
      ) : (
        <Container fixed>
          <IvrList ivrs={ivrs} />
        </Container>
      )}
    </>
  );
}

const mapDispatchToProps = {
  ivrListRequest,
};

export default connect(mapIvrStateToProps, mapDispatchToProps)(IvrListPage);
