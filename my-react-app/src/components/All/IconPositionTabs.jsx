import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import BugReportIcon from "@mui/icons-material/BugReport";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import SecurityIcon from "@mui/icons-material/Security";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
// Composant principal
export default function IconPositionTabs({ result }) {
  const [value, setValue] = useState("1"); // chaîne, pas un nombre

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value} >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList onChange={handleChange}  aria-label="tabs avec icônes">
          <Tab icon={<BugReportIcon />} iconPosition="start" label="Bug" value="1" />
          <Tab icon={<LockOpenIcon />} iconPosition="start" label="Vulnérabilité" value="2" />
          <Tab icon={<SecurityIcon />} iconPosition="start" label="Hotspot sécurité" value="3" />
          <Tab icon={<DonutLargeIcon />} iconPosition="start" label="Code Smell" value="4" />
        </TabList>
      </Box>

      <TabPanel value="1">
        <h3>les Methodes sont identiques</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
         {result.identicMethods?.map((item, i) => (
          <li key={i}>
            {item.map((element, j) => (
              <span key={j}>
                {element}
                {j < item.length - 1 ? " & " : ""}
              </span>
            ))}
          </li>
         ))}
        </ul>
     </TabPanel>


      <TabPanel value="2">
        <ul className="list-disc list-inside text-sm">
          {result.leakResources?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </TabPanel>

      <TabPanel value="3">
        <h3>ce variable sont pas important</h3>
        <ul className="list-disc list-inside text-sm text-gray-600">
          {result.notImportantVariables?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </TabPanel>

      <TabPanel value="4">À venir : suggestions d'amélioration de code</TabPanel>
    </TabContext>
  );
}
