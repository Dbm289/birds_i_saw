require "test_helper"

class BirdsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @bird = birds(:one)
  end

  test "should get index" do
    get birds_url, as: :json
    assert_response :success
  end

  test "should create bird" do
    assert_difference('Bird.count') do
      post birds_url, params: { bird: { favorite: @bird.favorite, last_seen_on: @bird.last_seen_on, location_seen: @bird.location_seen, name: @bird.name, quality_of_sightings: @bird.quality_of_sightings, times_seen: @bird.times_seen } }, as: :json
    end

    assert_response 201
  end

  test "should show bird" do
    get bird_url(@bird), as: :json
    assert_response :success
  end

  test "should update bird" do
    patch bird_url(@bird), params: { bird: { favorite: @bird.favorite, last_seen_on: @bird.last_seen_on, location_seen: @bird.location_seen, name: @bird.name, quality_of_sightings: @bird.quality_of_sightings, times_seen: @bird.times_seen } }, as: :json
    assert_response 200
  end

  test "should destroy bird" do
    assert_difference('Bird.count', -1) do
      delete bird_url(@bird), as: :json
    end

    assert_response 204
  end
end
