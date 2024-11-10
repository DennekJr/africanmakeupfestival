import React from "react";
import Image from "next/image";
import './WhoWeAre.styles.css';

export const WhoWeAre = () => {
  return (
    <section
      className="whoWeAreSection elementor-section elementor-top-section elementor-element elementor-element-6edf56e1 elementor-section-boxed elementor-section-height-default elementor-section-height-default animation_type_block sc_fly_static trx_addons_parallax_layers_inited trx_addons_parallax_blocks_inited animated agora-fadeinup"
    >
      <div className="whoWeAreContainer elementor-column-gap-extended">
        <div
          className="whoWeAreColumn elementor-col-100 elementor-top-column elementor-element elementor-element-324da5c1 sc_layouts_column_align_center sc_layouts_column sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left animation_type_block sc_fly_static trx_addons_parallax_layers_inited trx_addons_parallax_blocks_inited animated eventicity-fadeinup"
        >
          <div className="whoWeAreWidget elementor-element-populated">
            <section
              className="whoWeAreInnerSection with-custom-width elementor-section elementor-inner-section elementor-element elementor-element-401b2f7 elementor-section-boxed elementor-section-height-default elementor-section-height-default sc_fly_static trx_addons_parallax_layers_inited trx_addons_parallax_blocks_inited"
            >
              <div className="whoWeAreInnerSectionInnerContainer elementor-column-gap-no">
                <div
                  className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-0118742 sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static trx_addons_parallax_layers_inited trx_addons_parallax_blocks_inited"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-e477086 elementor-widget__width-initial elementor-absolute sc_parallax sc_fly_static sc_parallax_default elementor-widget elementor-widget-image trx_addons_parallax_layers_inited trx_addons_parallax_blocks_need_start trx_addons_parallax_blocks_inited trx_addons_parallax_blocks_on_start"
                      data-id="e477086"
                      style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px);"
                    >
                      <div className="elementor-widget-container">
                        <img
                          loading="lazy"
                          decoding="async"
                          width="76"
                          height="78"
                          src="https://agora.ancorathemes.com/wp-content/uploads/2024/06/decorativ-text-icon-1.svg"
                          className="attachment-full size-full wp-image-56626"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-ddd0a70 sc_fly_static elementor-widget elementor-widget-trx_sc_title trx_addons_parallax_layers_inited trx_addons_parallax_blocks_inited"
                    >
                      <div className="elementor-widget-container">
                        <div className="sc_title sc_title_default">
                          <span className="sc_item_subtitle sc_title_subtitle sc_item_subtitle_above sc_item_title_style_default">
                            Who we are
                          </span>
                          <h1 className="sc_item_title sc_title_title sc_item_title_style_default sc_item_title_tag">
                            <span className="sc_item_title_text">
                              Expert chefs, interactive workshops, and a world
                              of flavors await you at our{" "}
                            </span>
                            <span className="sc_item_title_text2">
                              food festival
                            </span>
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-8a6d0df elementor-widget__width-initial elementor-absolute e-transform e-transform sc_parallax sc_fly_static sc_parallax_default elementor-widget elementor-widget-image trx_addons_parallax_layers_inited trx_addons_parallax_blocks_need_start trx_addons_parallax_blocks_inited trx_addons_parallax_blocks_on_start"
                      style="translate: none; rotate: none; scale: none; transform: translate(1px, 0px) scale(0.99, 0.99);"
                    >
                      <div className="elementor-widget-container">
                        <Image
                          loading="lazy"
                          decoding="async"
                          width="76"
                          height="78"
                          src="https://agora.ancorathemes.com/wp-content/uploads/2024/06/decorativ-text-icon-1.svg"
                          className="attachment-full size-full wp-image-56626"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div
              className="whoWeAreInnerSectionInnerContainer elementor-element-294b5344 sc_fly_static elementor-widget elementor-widget-spacer trx_addons_parallax_layers_inited trx_addons_parallax_blocks_inited"
            >
              <div className="elementor-widget-container">
                <div className="elementor-spacer">
                  <div className="elementor-spacer-inner"></div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-3611cfec sc_fly_static elementor-widget elementor-widget-heading trx_addons_parallax_layers_inited trx_addons_parallax_blocks_inited"
            >
              <div className="elementor-widget-container">
                <h6 className="elementor-heading-title elementor-size-default">
                  Peter Bowman
                </h6>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-72f9850a sc_fly_static elementor-widget elementor-widget-text-editor trx_addons_parallax_layers_inited trx_addons_parallax_blocks_inited"
            >
              <div className="elementor-widget-container">
                Creative director
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
