<script setup>
import WebSerial from '../../vue/web_serial/WebSerial.vue'
import Alerts from '../../vue/alerts/Alerts.vue'
import {alerts} from '../../static/alerts'
</script>

<noscript>Javascript must be enabled to run this section of the website. If you are seeing this, please update your browser settings</noscript>

# How to flash the firmware {.text-3xl .font-bold .text-[#ab5ac7]}

In this section of the documentation you can flash your devices right from the browser!

Through the magic of `WebSerial` you can flash and configure your devices without ever having to download or use VSCode.

::: details <b>Dedicated Serial Monitor</b>
The dedicated Serial Monitor is a web-based serial terminal for your devices.
Using this terminal you can send commands to your devices and see the output.
You can also use this to test your devices functionality and modify config settings.

<h2>Serial Monitor</h2>

::: details <b>Dedicated Serial Monitor Docs</b>
Listed here are most 😉 of the commands you can send to the terminal.

<h2>Serial Monitor Commands</h2>

<ul>
    <li><b style="color:green;">clear</b> - This will clear the terminal</li>
    <li><b style="color:green;">connect</b> - This will attempt a connect to your ESP device</li>
    <li><b style="color:green;">begin</b> - This will attempt to write firmware to your board</li>
    <li><b style="color:green;">set</b> <b style="color:yellow;">&lt;param&gt; &lt;value&gt;</b> - This will set a config key with the desired value </li>
        Possible config keys:
        <ul>
            <li><b style="color:green;">ssid</b> - This is the ssid for your wifi</li>
            <li><b style="color:green;">password</b> - This is the password for your wifi</li>
            <li><b style="color:green;">ota_password</b> - This is the password for Over the Air Updates to occur</li>
        </ul>
        <Alerts :options="alerts.web_serial_one">
            <template v-slot:content>
                <p>
                    Your Wifi credentials never leave your machine and are directly written to the device. We do not, and never will, store these values.
                </p>
            </template>
        </Alerts>
</ul>

:::

<WebSerial />
