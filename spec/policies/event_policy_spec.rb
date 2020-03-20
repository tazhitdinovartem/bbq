require 'rails_helper'

RSpec.describe EventPolicy do
  let(:user) { FactoryBot.create(:user) }
  let(:another_user) { FactoryBot.create(:user) }
  let(:event) { FactoryBot.create(:event, user: user) }

  subject { EventPolicy }

  context 'user is event owner' do
    permissions :edit?, :update?, :destroy? do
      it { is_expected.to permit(user, event) }
    end
  end

  context 'user is not event owner' do
    permissions :edit?, :update?, :destroy? do
      it { is_expected.not_to permit(another_user, event) }
    end
  end

  context 'anonimous user cant edit/update/destroy event' do
    permissions :edit?, :update?, :destroy? do
      it { is_expected.not_to permit(nil, event) }
    end
  end

  context 'anonimous users can see event' do
    permissions :show? do
      it { is_expected.to permit(nil, event)}
    end
  end
end