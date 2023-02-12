<script setup>
const props = defineProps(['options']);

const checkSameFirmware = (manifest, improvInfo) => {
    const manifestFirmware = manifest.name.toLowerCase()
    const deviceFirmware = improvInfo.firmware.toLowerCase()
    return manifestFirmware.includes(deviceFirmware)
}
</script>

<script>
export default {
    mounted() {
        import('https://unpkg.com/esp-web-tools@9.2.0/dist/web/install-button.js?module')
    },
}
</script>

<template>
    <div class="my-2 max-w-xs">
        <esp-web-install-button :overrides={checkSameFirmware} manifest="firmware/manifest.json">
            <button class="rounded-[8px] bg-green-600 p-2 text-[var(--vp-c-black)] mt-1 hover:bg-green-500 focus:bg-green-400"
                slot="activate">Flash my Firmware</button>
            <span slot="unsupported">Ah snap, your browser doesn't work!</span>
            <span slot="not-allowed">Ah snap, you are not allowed to use this on HTTP!</span>
        </esp-web-install-button>
    </div>
</template>