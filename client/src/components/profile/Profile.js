import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layouts/Spinner";
import { getProfile } from "../../actions/profile";
import { Link } from "react-router-dom";

const Profile = ({
    getProfile,
    profile: { profile, loading },
    auth,
    match,
}) => {
    useEffect(() => {
        getProfile(match.params.id);
    }, [getProfile], match.params.id);
    return (
        <Fragment>
            {profile === null || loading ? (
                <Spinner />
            ) : (
                <Fragment>
                    <Link to="/profiles" className="btn btn-light">
                        Back to profiles
                    </Link>
                    {auth.isAuthenticated &&
                        auth.loading === false &&
                        auth.user._id === profile.user._id && (
                            <Link
                                to="/edit-profile"
                                className="btn btn-dark"
                            >Edit Profile</Link>
                        )}
                </Fragment>
            )}
        </Fragment>
    );
};

Profile.propTypes = {
    getProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    profile: state.profile,
    auth: state.auth,
});

export default connect(mapStateToProps, { getProfile })(Profile);
