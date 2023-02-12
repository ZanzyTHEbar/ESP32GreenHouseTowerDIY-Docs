<script setup>
import Alerts from '../../vue/alerts/Alerts.vue'
import { alerts } from '../../static/alerts'
</script>

⚠️ This page is not done. ⚠️

# Parts List {.text-[var(--font-accent)]}

This page will include a basic part list for building a basic setup.

<Alerts :options="alerts.parts_list_one">
    <template v-slot:content>
        <p>
           Please note that no hardware has been fully set in stone, all purchases are at your loss if hardware changes.
        </p>
    </template>
</Alerts>

## ***Materials for purchase***

### MQTT Broker

Any device that can run `Home Assistant` or `Mosquitto` MQTT broker. This is the device that will be used to talk to the tower.

A Raspberry Pi (any model) is a good option, as it is cheap and easy to setup. You can also use a PC or laptop, but this will require more setup and configuration.

Personally, i use my homelab server that is running `Home Assistant`.

### Tower

1. 12V submersible water pump
2. 3m or more of Vinyl tubing with 10mm ID and 13mm OD
3. 3D printer (optional)

## Basic kit - Full DIY

In the table below you'll find all the items needed to build the *Small and modular DIY kit*. The table shows the description of the item, quantity of how much or how many of each item you need and a link that goes to the site where I got the items from.

The table is divided into four main sections:

- :droplet: `irrigation`
- :zap: `electronics`
- :mag: `sensors`
- :wrench: `tools`

All of the irrigation items are for the parts handling liquids. The irrigation items can be found in the ebay link which takes you to a collection containing the items. **You will have to put in the amount yourself though, since Ebay templates doesn't support for that functionality**. It is assumed that you can find the `excluded` items by yourself or that you already have them. The goal for the *Basic kit* is to be as easy as possible. The kit has two parts: the aeroponics/hydroponics tower and the base in which you grow plants. :seedling:

Instructions on how to put all of this together can be found at [the documentation website](https://zanzythebar.github.io/ESP32GreenhouseTowerDIY/).

| Amount | Description                      | Link     | Notes | Image |
|  ---   | ---                              | ---      | ---   | ---   |
|        | :droplet: **irrigation**         |  | | |
| 1      | water pump                       | [ebay](http://www.ebay.com/itm/dc-12v-45w-0142-motor-high-pressure-diaphragm-water-self-priming-pump-4l-min/400758361869?hash=item5d4f0f4f0d) | | [image](http://i.ebayimg.com/images/g/VBYAAOSwEK9T6vwq/s-l1600.jpg)|
| 80 mm  | tubing (12mm(1/2"))              | [ebay](http://www.ebay.com/itm/pneumatic-push-in-fittings-for-air-water-hose-tube-stem-equal-connector-4-12mm/191149151018?hash=item2c8160932a) | Will be used with the pump | [image](http://www.ebaypa.com/albums/20140007/poa214453-5-.jpg) |
| 80 mm  | tubing (8mm(5/16"))              | [ebay](http://www.ebay.com/itm/pneumatic-push-in-fittings-for-air-water-hose-tube-stem-equal-connector-4-12mm/191149151018?hash=item2c8160932a) | Will be used with the pump | [image](http://www.ebaypa.com/albums/20140007/poa214451-4-.jpg) |
| 2 m    | tubing (6mm(1/4"))               | [ebay](http://www.ebay.com/itm/garden-patio-water-misting-cooling-system-sprinkler-nozzle-micro-irrigation-set/291518159407?hash=item43dfd61a2f) | Will be used to connect everything together, this tubing is a bit softer | [image](http://i.ebayimg.com/00/s/MTAwMVgxMDAx/z/DUgAAOSw-vlVkqTG/$_58.JPG) |
| 10 m   | tubing (6mm(1/4"))               | [ebay](http://www.ebay.com/itm/1-4-5m-meters-15ft-tube-tubing-hose-pipe-for-ro-water-filter-system-white-pe/131073862874?hash=item1e849c6cda) | This tubing is a bit harder giving more structure, making it nice to use in the vase | [image](http://i.ebayimg.com/00/s/NTk2WDY1MA==/z/jgkAAOxy63FSsXiB/$_58.JPG) |
| 2      | reducer (12->8mm)                | [ebay](http://www.ebay.com/itm/reducer-4mm-12mm-6-sizes-straight-push-in-pneumatic-tube-fitting-connector/271487074808?hash=item3f35e401f8) | Will be used with the pump | [image](https://i.ebayimg.com/images/g/xj0AAOxyOalTcJhY/s-l500.jpg) |
| 2      | reducer (8->6mm)                 | [ebay](http://www.ebay.com/itm/reducer-4mm-12mm-6-sizes-straight-push-in-pneumatic-tube-fitting-connector/271487074808?hash=item3f35e401f8) | Will be used with the pump | [image](https://i.ebayimg.com/images/g/xv4AAOxyOalTcJhf/s-l500.jpg) |
| 1      | solenoid valve 1/4"              | [ebay](https://www.ebay.com/itm/1-4-12V-DC-Metal-Plastic-Electric-Solenoid-Valve-Potable-Water-DC-12V/153508480075?hash=item23bdd1844b:g:eRoAAOSwqYtc8PGJ) | This releases pressured water from the PET to the nozzles | [image](http://i.ebayimg.com/images/g/6QsAAOSwDNdVnMke/s-l1600.jpg) |
| 2      | elbow push in fitting            | [ebay](http://www.ebay.com/itm/5pc-pneumatic-6mm-tube-to-1-4-bsp-male-thread-elbow-connector-push-in-fitting/282037876264?hash=item41aac47628) | for the PET bottle | [image](http://i.ebayimg.com/images/g/kwkAAOSwu1VW6pFl/s-l1600.jpg) |
| 2      | straight push in fitting         | [ebay](http://www.ebay.com/itm/4pcs-bsp-1-4-6mm-straight-male-push-in-fitting-pneumatic-pu-hose-connectors/401045944853?hash=item5d60337a15) | for the PET bottle | [image](http://i.ebayimg.com/images/g/pFgAAOSwJ4hZAF-A/s-l1600.jpg) |
| 2      | hex lock nut                     | [ebay](http://www.ebay.com/itm/1-4bsp-female-thread-brass-pipe-fitting-hex-lock-nut-10pcs/252218810462?hash=item3ab969a05e) | for the PET bottle | [image](http://i.ebayimg.com/images/g/TrEAAOSwYS9ZaFgt/s-l1600.jpg) |
| 2      | bushing                          | None found online so far | for the PET bottle (needs to be at least 14 mm deep) | [image](http://i.ebayimg.com/images/g/VXwAAOSw1JhZX01p/s-l1600.jpg) |
| 16     | elbow tube connector (6mm(1/4")) |  [ebay](http://www.ebay.com/itm/10pcs-1-4-tube-90-elbow-quick-connect-for-reverse-osmosis-water-fittings/231531620310?hash=item35e85c27d6) | Will be used to connect everything | [image](http://i.ebayimg.com/images/g/2ngAAOSwqu9VLIYb/s-l1600.jpg) |
| 11     | tee tube connector (6mm(1/4"))   | [ebay](http://www.ebay.com/itm/10pcs-1-4-male-tee-union-quick-connector-fitting-water-reverse-osmosis-filter/182036099777?hash=item2a623272c1) | Will be used to connect everything | [image](http://i.ebayimg.com/images/g/zLoAAOSw3v5YtXT5/s-l1600.jpg) |
| 2      | ball valve switch                | [ebay](http://www.ebay.com/itm/5x-od-tube-1-4-6mm-ball-valve-quick-connect-shut-off-switch-for-water-purifier/381243102306?hash=item58c3dc1462) | Will be used to add the ability to empty the system and take water samples | [image](http://i.ebayimg.com/images/g/R5QAAOSwcwhVLLTq/s-l1600.jpg) |
| 10     | brass misting nozzles            | [ebay](http://www.ebay.com/itm/brass-misting-nozzles-for-cooling-system-0-012-0-3-mm-10-24-unc-garden/251630116756?hash=item3a9652df94) | the amount depends on how many you'll need in your vase | [image](http://i.ebayimg.com/images/g/6ZwAAOSwPe1T~yXB/s-l1600.jpg) |
| 2      | bulkhead fitting (6 mm)          | [ebay](http://www.ebay.com/itm/various-pneumatic-fittings-air-valve-water-hose-tube-pipe-connector-joiner-new/222350504126?hash=item33c51f70be) | this is for the in- and out flow in the vase | [image](http://i.ebayimg.com/images/g/4BkAAOSwo4pYV1hA/s-l1600.jpg) |
| 1      | vase                             | [ikea](http://www.ikea.com/se/sv/catalog/products/60280205/) | e.g. a case like the one for the aeroponics container | [image](http://www.ikea.com/se/sv/images/products/kuggis-lada-med-lock-vit__0372094_PE551690_S4.JPG) |
| 2      | sponge                           | excluded |       |       |
| 4      | cable ties                       | excluded |       |       |
|        | :zap: **electronics**            |          |       |       |
| 1      | ESP32                      | [amazon](https://www.amazon.com/Arduino-Uno-R3-Microcontroller-A000066/dp/B008GRTSV6/ref=sr_1_1?ie=UTF8&qid=1500834010&sr=8-1&keywords=arduino) | | [image](https://images-na.ssl-images-amazon.com/images/I/51-rsyPvHOL.jpg)|
| 1      | 2-channel relay                  | [amazon](https://www.amazon.com/GEREE-2-Channel-Module-Optocoupler-Arduino/dp/B00PS4ZEDQ/ref=pd_sim_469_5?_encoding=UTF8&pd_rd_i=B00PS4ZEDQ&pd_rd_r=6WHHZFEE4G82HCH34B5V&pd_rd_w=cI57m&pd_rd_wg=HNLVd&psc=1&refRID=6WHHZFEE4G82HCH34B5V) | | [image](https://images-na.ssl-images-amazon.com/images/I/71lCPzMeQxL._SL1001_.jpg) |
| 1      | 12V power supply                 | [ebay](http://www.ebay.com/itm/172589666021?var=471422989078) | 8A for good measure and compensate for ebay quality, but in theory only 5A is necessary. Terminal block is included here but don't forget it if you buy another power supply | [image](http://i.ebayimg.com/images/g/QrcAAOSwepZXRl4n/s-l1600.jpg)|
| 1      | breadboard jumper wires          | [amazon](https://www.amazon.com/GenBasic-Solderless-Ribbon-Breadboard-Prototyping/dp/B01L5UJ36U/ref=sr_1_3?s=electronics&ie=UTF8&qid=1500834685&sr=1-3&keywords=breadboard+jumper+wires+male+to+male) | | [image](https://images-na.ssl-images-amazon.com/images/I/81aCfJn%2B-wL._SL1500_.jpg)|
| 1      | terminal block connector         | [amazon](https://www.amazon.com/uxcell-5-08mm-Pitch-Female-Terminal/dp/B00W94JF92/ref=sr_1_15?s=electronics&ie=UTF8&qid=1500835277&sr=1-15&keywords=terminal+block+connector) | Two is needed | [image](https://images-na.ssl-images-amazon.com/images/I/617jrydZRgL._SL1100_.jpg) |
|        | :mag: **sensors**                |          |       |       |
| 1      | pressure gauge                   | [ebay](http://www.ebay.com/itm/Tap-Water-Pressure-Test-With-Oil-Pressure-Gauge-16MPa-For-Water-Purifiers-1-2-034-/251399603152?&_trksid=p2056016.m2518.l4276) | Will be used to check that the system is correctly pressurized | [image](https://i.ebayimg.com/images/g/-gYAAMXQlgtSpX2E/s-l500.jpg) |
|        | :wrench: **tools**               |          |       |       |
| 1      | pen                              | excluded |       |       |
| 1      | knife                            | excluded |       |       |
| 1      | drilling machine                 | excluded |       |       |
| 1      | 12mm drill bit                   | excluded |       |       |
| 2      | wrench                           | excluded |       |       |
| 1      | tweezers                         | excluded |       |       |
| 1      | soldering iron                   | excluded |       |       |
| 1      | solder                           | excluded |       |       |
| 1      | cord                             | excluded |       |       |
| 1      | shrink tub                       | excluded |       |       |
| 1      | aluminum foil                    | excluded |       |       |
| 2      | PET bottles                      | excluded |       |       |
