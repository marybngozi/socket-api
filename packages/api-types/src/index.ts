import { z } from 'zod';
import { ReportItemSchema, ChartTypeSchema } from './report'

export { ReportItemSchema, ChartTypeSchema };

export type ChartType = z.infer<typeof ChartTypeSchema>;
export type ReportItem = z.infer<typeof ReportItemSchema>;