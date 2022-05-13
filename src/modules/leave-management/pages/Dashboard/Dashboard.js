import React from "react";
import Page from "modules/common/components/Page";
import Grid from "modules/common/components/Grid";
import UrgentLeavesWidget from "modules/leave-management/components/UrgentLeavesWidget";
import LeavePlanChartWidget from "modules/leave-management/components/LeavePlanChartWidget";
import LeavesTable from "modules/leave-management/components/LeavesTable";
const Dashboard = () => {
  return (
    <Page.Content>
      <Grid>
        <Grid.Item span={6}>
          <UrgentLeavesWidget />
        </Grid.Item>
        <Grid.Item span={6}>
          <LeavePlanChartWidget />
        </Grid.Item>
      </Grid>
      <Grid.Item span={12}>
        <LeavesTable />
      </Grid.Item>
    </Page.Content>
  );
};

export default Dashboard;
