const fetchData = async () => {
  const dataFetch = await fetch('/data');
  const data = await dataFetch.json();
  return data.rows.map(data => {
    return {
      campaignName: data.campaignName,
      dayOfWeek: data.dayOfWeek,
      hourOfDay: data.hourOfDay,
      device: data.device,
      clicks: data.clicks,
      avgCpc: data.avgCpc,
      avgPosition: data.avgPosition,
      cost: data.cost,
      ctr: data.ctr,
      impressions: data.impressions,
      maxImpressions: data.maxImpressions,
      searchImpressionShare: data.searchImpressionShare,
      conversions: data.conversions
    };
  });
};

export default fetchData;
