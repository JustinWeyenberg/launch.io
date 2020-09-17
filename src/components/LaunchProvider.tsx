/* eslint-disable react/prop-types */
import React from "react";
import Context from "./Context";
import useLaunchReducer from "../hooks/useLaunchReducer";
import { ServiceApi } from "../types";

/**
 * This component should wrap your application and the `Launch.IO` `createServiceApi` should be
 * used in conjunction to populate the `serviceApi` property of this component.
 *
 * @return `Launch.IO` `LaunchProvider` `React` Component
 * */
const LaunchProvider: React.FC<{ serviceApi: ServiceApi }> = ({
  serviceApi,
  children,
}) => {
  const [state, dispatch] = useLaunchReducer(
    serviceApi.reducer,
    serviceApi.initialState
  );

  return (
    <Context.Provider value={{ state, actions: serviceApi.actions, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export default LaunchProvider;