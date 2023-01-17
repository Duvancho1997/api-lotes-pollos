export const queriesconversion = {
    getConsultaConversion: 
"select [Conversion] from Lotes inner join [dbo].[Lote_venta] lv on  lv.Id_ref_lote =  Id_lote INNER JOIN  [dbo].[Produccion_venta] pv ON  pv.Id_ref_lote_venta = lv.Id_lote_venta_total WHERE  Id_lote = @Id"
}