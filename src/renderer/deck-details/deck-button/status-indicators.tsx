import { FaCodeBranch } from "react-icons/fa6";
import { FaGun } from "react-icons/fa6";
import { FaVolumeHigh } from "react-icons/fa6";

export const StatusIndicators = ({ button }) => {
  const { commands, inputs } = button;
  const commandHasSound = commands.some((c) => c.commandId === 'core.playSound');

  return (
    <>
      {commands && commands.length > 0 && <FaCodeBranch />}
      {inputs && inputs.length > 0 && <FaGun />}
      {commandHasSound && <FaVolumeHigh />}
    </>
  );
};
