<script>
export default {
    props: {
        modelvalue: { type: String, default: "" },
    },
    emits: ["submit", "update:modelvalue"],
    methods: {
        updateModelvalue(e) {
            this.$emit("update:modelvalue", e.target.value)
        },
        submit() {
            this.$emit("submit")
        },
    },
}
</script>

<template>
    <div class="input-group">
        <input
            type="text"
            class="form-control"
            placeholder="Nhập thông tin cần tìm"
            :value="modelvalue"
            @input="updateModelvalue"
            @keyup.enter="submit"
        />
        <div class="input-group-append">
            <button
            type="button"
            class="btn btn-outline-secondary"
            @click="submit"
            >
            <i class="fas fa-search"></i>Tìm kiếm
            </button>
        </div>
    </div>
</template>