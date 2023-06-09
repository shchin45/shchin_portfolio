/* eslint-disable react-memo/require-memo */

import {useCallback, useMemo} from "react";
import Particles from "react-tsparticles";
import {Engine, ISourceOptions} from "tsparticles-engine";
import {loadSlim} from "tsparticles-slim"; 

import particalesConfig from "../data/paricles_config";

const ParticlesComponent = (props: { id: string | undefined; options: ISourceOptions}) => {
 
  const options: ISourceOptions = useMemo(() => {
    return particalesConfig;
  }, []);

  
  const particlesInit = useCallback(async(engine: Engine) => {
    loadSlim(engine);
  }, []);

  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;