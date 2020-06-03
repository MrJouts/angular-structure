import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

export enum Icons {
  Audio = "audio",
  Cancel = "cancel",
  Delete = "delete",
  Destination = "destination",
  Filters = "filters",
  Retry = "retry",
  Search = "search",
  Status = "status",
  Video = "video",
  Workflow = "workflow",
  L1 = "l1",
}

@Injectable({
  providedIn: "root",
})
export class IconServiceService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  public registerIcons(): void {
    this.loadIcons(Object.values(Icons), "../assets/icons");
  }

  private loadIcons(iconKeys: string[], iconUrl: string): void {
    iconKeys.forEach((key) => {
      this.matIconRegistry.addSvgIcon(
        key,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `${iconUrl}/${key}.svg`
        )
      );
    });
  }
}
