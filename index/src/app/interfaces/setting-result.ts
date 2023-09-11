import { AgentProfile } from "./agent-profile";
import { RealstateData } from "./realstate-item";

export interface SettingResult {
    items: RealstateData[],
    agentProfile: AgentProfile,
}
