import { z } from 'zod';

export const ChartTypeSchema = z.enum([
  "bar-chart", 
  "pie-chart", 
  "line-chart", 
  "none"
]);

export const ReportItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  chartType: z.enum(["bar-chart", "pie-chart", "none"]),
  properties: z.object({
    label: z.string(),
    subtitle: z.string().optional(),
  }),
});