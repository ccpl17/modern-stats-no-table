import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CellValue, HyperFormula, RawCellContent } from "hyperformula";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public title: string = "現代統計學才不用查表";
  private data?: unknown[][];
  private sheet?: HyperFormula;
  private options: { licenseKey: string } = { licenseKey: "gpl-v3" };
  private zPInput?: HTMLInputElement;
  private zP?: number;
  public zCv?: CellValue;
  private tPInput?: HTMLInputElement;
  private tP?: number;
  private tDfInput?: HTMLInputElement;
  private tDf?: number;
  public tCv?: CellValue;
  private fPInput?: HTMLInputElement;
  private fP?: number;
  private fDf1Input?: HTMLInputElement;
  private fDf1?: number;
  private fDf2Input?: HTMLInputElement;
  private fDf2?: number;
  public fCv?: CellValue;
  private fPRtInput?: HTMLInputElement;
  private fPRt?: number;
  private fDf1RtInput?: HTMLInputElement;
  private fDf1Rt?: number;
  private fDf2RtInput?: HTMLInputElement;
  private fDf2Rt?: number;
  public fCvRt?: CellValue;
  private chiSqPInput?: HTMLInputElement;
  private chiSqP?: number;
  private chiSqDfInput?: HTMLInputElement;
  private chiSqDf?: number;
  public chiSqCv?: CellValue;
  private chiSqPRtInput?: HTMLInputElement;
  private chiSqPRt?: number;
  private chiSqDfRtInput?: HTMLInputElement;
  private chiSqDfRt?: number;
  public chiSqCvRt?: CellValue;

  public zPChange(event: Event): void {
    this.zPInput = event.target as HTMLInputElement;
    this.zP = parseFloat(this.zPInput.value);
    this.data = [[this.zP, `=IFERROR("${"\u00B1"}"&ABS(ROUND(NORM.S.INV(A1),4)),"")`]];
    this.sheet = HyperFormula.buildFromArray(<RawCellContent[][]>this.data, this.options);
    this.zCv = this.sheet.getCellValue({ col: 1, row: 0, sheet: 0 });
  }

  public tPChange(event: Event): void {
    this.tPInput = event.target as HTMLInputElement;
    this.tP = parseFloat(this.tPInput.value);
    this.tChange();
  }

  public tDfChange(event: Event): void {
    this.tDfInput = event.target as HTMLInputElement;
    this.tDf = parseFloat(this.tDfInput.value);
    this.tChange();
  }

  private tChange(): void {
    this.data = [[this.tP, this.tDf, `=IFERROR("${"\u00B1"}"&ABS(ROUND(T.INV(A1,B1),4)),"")`]];
    this.sheet = HyperFormula.buildFromArray(<RawCellContent[][]>this.data, this.options);
    this.tCv = this.sheet.getCellValue({ col: 2, row: 0, sheet: 0 });
  }

  public fPChange(event: Event): void {
    this.fPInput = event.target as HTMLInputElement;
    this.fP = parseFloat(this.fPInput.value);
    this.fChange();
  }

  public fDf1Change(event: Event): void {
    this.fDf1Input = event.target as HTMLInputElement;
    this.fDf1 = parseFloat(this.fDf1Input.value);
    this.fChange();
  }

  public fDf2Change(event: Event): void {
    this.fDf2Input = event.target as HTMLInputElement;
    this.fDf2 = parseFloat(this.fDf2Input.value);
    this.fChange();
  }

  public fPRtChange(event: Event): void {
    this.fPRtInput = event.target as HTMLInputElement;
    this.fPRt = parseFloat(this.fPRtInput.value);
    this.fRtChange();
  }

  public fDf1RtChange(event: Event): void {
    this.fDf1RtInput = event.target as HTMLInputElement;
    this.fDf1Rt = parseFloat(this.fDf1RtInput.value);
    this.fRtChange();
  }

  public fDf2RtChange(event: Event): void {
    this.fDf2RtInput = event.target as HTMLInputElement;
    this.fDf2Rt = parseFloat(this.fDf2RtInput.value);
    this.fRtChange();
  }

  private fChange(): void {
    this.data = [[this.fP, this.fDf2, this.fDf1, `=IFERROR(ROUND(F.INV(A1,B1,C1),4),"")`]];
    this.sheet = HyperFormula.buildFromArray(<RawCellContent[][]>this.data, this.options);
    this.fCv = this.sheet.getCellValue({ col: 3, row: 0, sheet: 0 });
  }

  private fRtChange(): void {
    this.data = [[this.fPRt, this.fDf1Rt, this.fDf2Rt, `=IFERROR(ROUND(F.INV.RT(A1,B1,C1),4),"")`]];
    this.sheet = HyperFormula.buildFromArray(<RawCellContent[][]>this.data, this.options);
    this.fCvRt = this.sheet.getCellValue({ col: 3, row: 0, sheet: 0 });
  }

  public chiSqPChange(event: Event): void {
    this.chiSqPInput = event.target as HTMLInputElement;
    this.chiSqP = parseFloat(this.chiSqPInput.value);
    this.chiSqChange();
  }

  public chiSqDfChange(event: Event): void {
    this.chiSqDfInput = event.target as HTMLInputElement;
    this.chiSqDf = parseFloat(this.chiSqDfInput.value);
    this.chiSqChange();
  }

  private chiSqChange(): void {
    this.data = [[this.chiSqP, this.chiSqDf, `=IFERROR(ROUND(CHISQ.INV(A1,B1),4),"")`]];
    this.sheet = HyperFormula.buildFromArray(<RawCellContent[][]>this.data, this.options);
    this.chiSqCv = this.sheet.getCellValue({ col: 2, row: 0, sheet: 0 });
  }

  public chiSqPRtChange(event: Event): void {
    this.chiSqPRtInput = event.target as HTMLInputElement;
    this.chiSqPRt = parseFloat(this.chiSqPRtInput.value);
    this.chiSqRtChange();
  }

  public chiSqDfRtChange(event: Event): void {
    this.chiSqDfRtInput = event.target as HTMLInputElement;
    this.chiSqDfRt = parseFloat(this.chiSqDfRtInput.value);
    this.chiSqRtChange();
  }

  private chiSqRtChange(): void {
    this.data = [[this.chiSqPRt, this.chiSqDfRt, `=IFERROR(ROUND(CHISQ.INV.RT(A1,B1),4),"")`]];
    this.sheet = HyperFormula.buildFromArray(<RawCellContent[][]>this.data, this.options);
    this.chiSqCvRt = this.sheet.getCellValue({ col: 2, row: 0, sheet: 0 });
  }
}
