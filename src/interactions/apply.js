const { SlashCommandBuilder, ModalBuilder, ActionRowBuilder, Client, StringSelectMenuInteraction, TextInputBuilder, TextInputStyle, StringSelectMenuBuilder } = require('discord.js');
const data = require('../../config.json')
module.exports = {
    name: 'apply',
    /**
     * @param {StringSelectMenuInteraction}  interaction 
     * @param {Client} client 
    */
    async execute(client, config, interaction) {
        const option = interaction.values[0]
        const modal = new ModalBuilder()
            .setCustomId(`applysub*_${interaction.customId.split('*')[1]}_${option}`)
            .setTitle(`تقديم على ${option}`);

        // Create text input components
        const nameInput = new TextInputBuilder()
            .setCustomId('nameInput')
            .setLabel('الاسم و العمر و بلدك')
            .setStyle(TextInputStyle.Short)
            .setPlaceholder('ادخل الاسم و العمر هنا')
            .setRequired(true);

        const ageInput = new TextInputBuilder()
            .setCustomId('ageInput')
            .setLabel('كم ممدة تفاعلك في اليوم')
            .setStyle(TextInputStyle.Short)
            .setPlaceholder('ادخل مدة التواجد هنا')
            .setRequired(true);

        const experienceInput = new TextInputBuilder()
            .setCustomId('experienceInput')
            .setLabel('ما هي خبراتك في الديسكورد')
            .setStyle(TextInputStyle.Paragraph)
            .setPlaceholder('ادخل الخبرات هنا')
            .setRequired(true);

        const reasonInput = new TextInputBuilder()
            .setCustomId('reasonInput')
            .setLabel('لماذا اخترت سيرفر روليكس')
            .setStyle(TextInputStyle.Paragraph)
            .setPlaceholder('ادخل السبب هنا')
            .setRequired(true);

        // Create action rows for each text input
        const firstActionRow = new ActionRowBuilder().addComponents(nameInput);
        const secondActionRow = new ActionRowBuilder().addComponents(ageInput);
        const thirdActionRow = new ActionRowBuilder().addComponents(experienceInput);
        const fourthActionRow = new ActionRowBuilder().addComponents(reasonInput);

        // Add inputs to the modal
        modal.addComponents(firstActionRow, secondActionRow, thirdActionRow, fourthActionRow);

        interaction.showModal(modal);
    },

};

