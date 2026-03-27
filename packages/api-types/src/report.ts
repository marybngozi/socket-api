import { z } from 'zod';

export const ChartTypeSchema = z.enum([
  "bar-chart", 
  "pie-chart", 
  "line-chart", 
  "area-chart", 
  "none"
]);

export const ReportItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  chartType: ChartTypeSchema,
  properties: z.object({
    label: z.string(),
    subtitle: z.string().optional(),
  }),
});