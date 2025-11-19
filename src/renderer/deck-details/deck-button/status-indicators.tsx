import { FaCodeBranch } from "react-icons/fa6";
import { FaGun } from "react-icons/fa6";
import { FaVolumeHigh } from "react-icons/fa6";

export const StatusIndicators = ({ button }) => {
  const { command_list, triggers } = button;
  const commandHasSound = command_list.some((c) => c.cmd === 2.0);

  return (
    <>
      {command_list && command_list.length > 0 && <FaCodeBranch />}
      {triggers && triggers.length > 0 && <FaGun />}
      {commandHasSound && <FaVolumeHigh />}
    </>
  );
};
