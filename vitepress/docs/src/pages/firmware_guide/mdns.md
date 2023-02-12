# MDNS # Firmware Guide {.text-[var(--font-accent)]}

## What is it?

`mDNS` is a protocol that allows you to connect to a device using a name instead of an IP address. This is useful if you do not know the IP address of the device, or if you do not want to keep track of the IP address of the device. This is also useful if you are using a device that does not have a static IP address.

In the `mDNS` protocol the IP address of the device can change, but the name of the device will always be the same. This means that you can connect to the device using the name of the device, even if the IP address of the device changes.

## How to use it

### Enable mDNS

The `mDNS` feature is enabled by default on the new firmware, and can not be disabled.

To use it, all you need to do is set the name of the device in the firmware config file.

This setting can be located under the `[wifi]` section of the `ini/user_config.ini` file.

```ini
mdnsname = "greenhousetower" # do not add .local
```

By default, the name of the device is `greenhousetower`, however you can change it to whatever you want.

::: warning Change the name
Since you have two ESP32 devices, you need to make sure that the name of the device is different for each device. If you do not change the name of the device, you will not be able to connect to both devices at the same time.
:::

### Connect to the device

To connect to the device, you need to use the name of the device followed by `.local`. For example, if the name of the device is `esp32`, you can connect to the device using `http://esp32.local`.

## Prerequisites `Bonjour`

`Bonjour` is required to use the `mDNS` protocol _for windows and mac only_. If you are using Windows, you can download Bonjour from [here](https://support.apple.com/kb/DL999?locale=en_US). If you are using macOS, Bonjour is already installed.

You can also get the fully tested Bonjour package from us [here](https://github.com/RedHawk989/EyeTrackVR/tree/GUI/GUI/assets/3rdParty) (for Windows only).

## MQTT Broker Auto Discovery

The firmware supports the MQTT Broker Auto Discovery protocol. This means that you can connect to the MQTT Broker automgically without having to manually configure the MQTT Broker's IP address.

____

### MQTT Broker Configuration and Connection

The MQTT Broker is a free self-hosted service that allows you to publish and subscribe to MQTT messages. To automate the connection process, this project offers Multi-Cast DNS (mDNS/Zeroconf) to find the broker. For this to work, you must have a broker on your local network, and you must have only 1 MQTT broker within the range of the client, otherwise the client will simply connect to the first broker it finds.

Using a Zeroconf approach we can avoid having to hard code the broker's IP address or hostname into the client device's firmware. Instead we can use DNS-SD and Avahi/Bonjour to discover the server hosting the MQTT broker.

To enable MQTT discovery on the broker, simply install avahi-daemon (assuming the broker is running `Debian` or some form of Linux).

#### Option One

If you are using Home Assistant, you can use the MQTT Discovery feature within the firmware, and the MQTT broker will be discovered automatically. Nothing is needed from you for this to work. Simply turn on the ESP32 and be connected to the same network as the MQTT broker.

You can refer to the [ZeroConf Documentation here](https://www.home-assistant.io/integrations/zeroconf/) and [here](https://developers.home-assistant.io/docs/creating_integration_manifest/#zeroconf) for more information and troubleshooting.

If for some reason you are unable to use the MQTT Discovery feature, you can still use the mDNS feature to discover the broker, see Option Two below.

#### Option Two

You will need to install the [avahi](https://avahi.org/) package. For Debian-based systems, use the following command:

```bash
sudo apt-get install avahi-daemon
```

For this to work, the MQTT service needs to be advertised. On a Linux host system, Avahi can be configured to do this by including the following in `/etc/avahi/services/mqtt.service`:

```xml
<!DOCTYPE service-group SYSTEM "avahi-service.dtd">
<service-group>
 <name replace-wildcards="yes">MQTT on %h</name>
  <service>
   <type>_mqtt._tcp</type>
   <port>1883</port>
  </service>
</service-group>
```

This will advertise the MQTT service on port 1883. If you are using a different port, you will need to change it in the above file.

Now you are raedy to connect to the MQTT broker, autogamically.

## Troubleshooting

### Can not connect to the device

If you can not connect to the device, make sure that the name of the device is correct. If the name of the device is correct, make sure that the device is connected to the network.

If the device is connected to the network, try to restart the device. If the device is still not connected, try to restart the router.
